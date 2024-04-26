import Signature from "../models/SignatureModel.js"

// Obtener todas las asignaturas
 export const getAllSignatures = async (req, res) => {
  try {
    const asignatures = await Signature.findAll();
    res.json(asignatures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la firma' });
  }
};

// Crear una nueva asignatura
 export const createSignature = async (req, res) => {
  const { SignatureName } = req.body;
  try {
    const newSignature = await Signature.create({ SignatureName });
    res.json(newSignature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la firma' });
  }
};

// Otros métodos CRUD según sea necesario
 export const updateSignature = async (req, res) => {  

}


 export const getSignatureById = async (req, res) => {  

}


 export const deleteSignature = async (req, res) => {  

};
