describe('Bibliothek', function () {

    it('should exist', function () {
        expect(Bibliothek).toBeDefined();
    });

    it('should add book', function () {
        let bib:Bibliothek = new Bibliothek();
        expect(bib.books.length).toBe(0);
        bib.addBook({
            name: 'any book',
            author: 'any author',
            datum: new Date(),
            isbn: '03435345'
        });
        expect(bib.books.length).toBe(1);
    });

    describe('book search', function () {

        let bib:Bibliothek;

        beforeEach(function () {
            bib = new Bibliothek();
            bib.addBook({
                name: 'Clean Code',
                author: 'Robert C. Martin',
                datum: new Date('2008-08-11'),
                isbn: '0132350882'
            });
        });

        it('should find by full title', function () {
            let buch:Buch[] = bib.suche('Clean Code');
            expect(buch.length).toBe(1);
        });

        it('should find by parts of title', function () {
            let buch:Buch[] = bib.suche('Code');
            expect(buch.length).toBe(1);
        });

        it('should not find by wrong title', function () {
            let buch:Buch[] = bib.suche('Not Clean Code');
            expect(buch.length).toBe(0);
        });

        it('should find by author', function () {
            let buch:Buch[] = bib.suche('Robert C. Martin');
            expect(buch.length).toBe(1);
        });

        it('should find by date', function () {
            let buch:Buch[] = bib.suche(new Date('2008-08-11'));
            expect(buch.length).toBe(1);
        });

        it('should find by isbn', function () {
            let buch:Buch[] = bib.suche('0132350882');
            expect(buch.length).toBe(1);
        });

    });
});
