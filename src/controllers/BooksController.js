import { authorModel } from "../models/Author.js";
import bookModel from "../models/Book.js";

class BooksController {
    static async index(req, res) {
        try {
            const booksList = await bookModel.find({});
            res.status(200).json(booksList);    
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao listar livros`});
        }
    }

    static async search(req, res) {
        try {
            const publisher = req.query.publisher;
            const booksList = await bookModel.find({publisher: publisher});
            res.status(200).json(booksList);    
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao buscar livros`});
        }
    }

    static async store(req, res) {
        const bookData = req.body;
        try {
            const existingAuthor = await authorModel.findById(bookData.author);
            const finalBookData = {...bookData, author: {...existingAuthor._doc}};
            const createdBook = await bookModel.create(finalBookData);
            res.status(201).json({message: "Criado com sucesso", book: createdBook});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar livro`});
        }
    }
    
    static async show(req, res) {
        try {
            const id = req.params.id;
            const book = await bookModel.findById(id);
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao listar livros`});
        }
    }
    
    static async update(req, res) {
        try {
            const id = req.params.id;
            await bookModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao atualizar livro`});
        }
    }
    
    static async destroy(req,res) {
        try {
            const id = req.params.id;
            await bookModel.findByIdAndDelete(id);
            res.status(204).json({message: "livro excluído"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao excluir livro`});
        }
    }
};

export default BooksController;
