describe ("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;
    });

    describe("Addition tests", function() {
        it ("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply a number", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith ("Error!");
        });
    });

    describe("Subtraction tests", function() {
        it ("should return -12", function() {
            calc.subtract(12);
            expect(calc.value).toBe(-12);
        });
        it("Should return 7", function() {
            calc.add(14);
            calc.subtract(7);
            expect(calc.value).toBe(7);
        });
        it("should return an error if we don't supply a number", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith ("Error!");
        });
    });

    describe("Multiplication tests", function() {
        it("Should return 20", function() {
        calc.multiply(4, 5);
        expect(calc.value).toBe(20);
        });
        it("Should return 0", function() {
            calc.multiply(0, 5);
            expect(calc.value).toBe(0);
        });
        it("Should return -10", function() {
            calc.multiply(2, -5);
            expect(calc.value).toBe(-10);
        });
        it("should return an error if we don't supply a number", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith ("Error!");
        });
    });

    describe("Division tests", function() {
        it("Should return 25", function() {
            calc.divide(50, 2);
            expect(calc.value).toBe(25);
        });
        it("Should return 0", function() {
            calc.divide(0, 2);
            expect(calc.value).toBe(0);
        });
        it("Should return 130", function() {
            calc.divide(390, 3);
            expect(calc.value).toBe(130);
        });
        it("should return an error if we don't supply a number", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith ("Error!");
        });
    });
});