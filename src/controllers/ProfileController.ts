import { Request, Response } from "express";
import { patchProfile, updateImage } from "../services/profileServices";
import formidable from "formidable";
import cloudinary from "../cloudinary/cloudinary";

export const patchProfileController = async (req: Request, res: Response) => {
  try {
    const { handle, description, links } = req.body;
    const { id } = req.params;

    const patchUser = await patchProfile(id, handle, description, links);

    if (patchUser) res.status(200).json("Perfil actualizado correctamente");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const uploadImageController = async (req: Request, res: Response) => {
  try {
    const form = formidable({ multiples: false });
    const { id } = req.params;

    form.parse(req, (error, fields, files) => {
      if (error) throw Error("Error al subir la imagen");

      if (files.file) {
        const fileType = files.file[0].mimetype || "";
        const validImageTypes = ["image/jpeg", "image/png", "image/webp"];

        if (fileType && !validImageTypes.includes(fileType)) {
          return res
            .status(400)
            .json("Solo se permiten archivos de imagen (jpeg, png, webp)");
        }

        cloudinary.uploader.upload(
          files.file[0].filepath,
          { folder: "devtree", type: "private" },
          async (error, result) => {
            if (error) throw Error("Error al subir la imagen");
            if (result) {
              updateImage(id, result.secure_url);
              res.status(200).json({ image: result.secure_url });
            }
          }
        );
      }
    });
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
