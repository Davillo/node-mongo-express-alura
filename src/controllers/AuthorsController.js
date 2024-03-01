import {authorModel} from "../models/Author.js";

class AuthorsController {
  static async index(req, res) {
    try {
      const authorsList = await authorModel.find({});
      res.status(200).json(authorsList);    
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao listar autores`});
    }
  }

  static async store(req, res) {
    try {
      const createdAuthor = await authorModel.create(req.body);
      res.status(201).json({message: "Criado com sucesso", author: createdAuthor});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao cadastrar autor`});
    }
  }
    
  static async show(req, res) {
    try {
      const id = req.params.id;
      const book = await authorModel.findById(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao listar autores`});
    }
  }
    
  static async update(req, res) {
    try {
      const id = req.params.id;
      await authorModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "livro atualizado"});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao atualizar autor`});
    }
  }
    
  static async destroy(req,res) {
    try {
      const id = req.params.id;
      await authorModel.findByIdAndDelete(id);
      res.status(204).json({message: "autor excluído"});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao excluir autor`});
    }
  }
}

export default AuthorsController;
