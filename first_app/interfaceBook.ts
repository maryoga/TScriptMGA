interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void
}

const book:Book = {
    id: 1,
    title: '100 Años de Soledad',
    author: 'Gabriel García M'
};

//Variable books que espera un Array de Libros
const books: Book[] = [];

function getBook(): Book {
    return {id: 1, title: 'TypeScript & POO', author:'Maryo'};
}

const myBook = getBook();

function createBook(book: Book): Book {
    return book;
}


const newBook: Book = {
    id: 1,
    title: 'TypeScript & POO',
    author:'Maryo',
    coAuthor: 'Timmy'
}
createBook(newBook);