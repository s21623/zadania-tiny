function Student(imie, nazwisko, nrIndeksu, oceny) {
	this.name = imie;
	this.surname = nazwisko;
	this.index = nrIndeksu;
	this.grades = oceny;

	this.imieNazwiskoSrednia = () => {
		let avgGrade;

		let sumGrades = 0;

		this.grades.forEach(grade => {
			sumGrades += grade;
		});

		avgGrade = sumGrades / this.grades.length;

		return (`Imię: ${this.name}, Nazwisko: ${this.surname}, Średnia ocen: ${avgGrade}`);
	}
}

const jakisTamStudent = new Student('Wiktor', 'Drozda', 's21623', [2, 3, 4, 5, 2, 3, 4]);

console.log(jakisTamStudent.imieNazwiskoSrednia());