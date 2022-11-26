class StudentsService {
  numStudents = 0;
  allStudents = [];

  indexes = {};

  getStudent(id) {
    const exists = this.studentExists(id);

    if (!exists) {
      return console.log("Student does not exist");
    }

    const index = this.indexes[id];

    return this.allStudents[index];
  }

  failIfStudentDoesNotExist() {
    const exists = this.studentExists(id);

    if (!exists) {
      return console.log("Student does not exist");
    }
  }

  addNewStudent(id) {
    this.allStudents.push({
      id,
      isInABuilding: false,
      isInBBuilding: false,
    });

    this.indexes[id] = this.numStudents;
    this.numStudents++;
  }

  studentExists(id) {
    return id in this.indexes;
  }

  isStudentInABuilding(id) {
    return this.getStudent(id).isInABuilding;
  }

  isStudentInABuilding(id) {
    return this.getStudent(id).isInBBuilding;
  }

  enterToABuilding(id) {
    const student = this.getStudent(id);

    if (student.isInABuilding) {
      return console.log("Student is already in A building");
    }

    if (student.isInBBuilding) {
      return console.log("Student is still in B building");
    }

    student.isInABuilding = true;
    student.isInBBuilding = false;
  }

  enterToBBuilding(id) {
    const student = this.getStudent(id);

    if (student.isInBBuilding) {
      return console.log("Student is already in B building");
    }

    if (student.isInABuilding) {
      return console.log("Student is still in A building");
    }

    student.isInABuilding = false;
    student.isInBBuilding = true;
  }

  leaveABuilding(id) {
    const student = this.getStudent(id);

    if (!student.isInABuilding) {
      return console.log("Student is not in A building");
    }

    student.isInABuilding = false;
  }

  leaveBBuilding(id) {
    const student = this.getStudent(id);

    if (!student.isInBBuilding) {
      return console.log("Student is not in B building");
    }

    student.isInBBuilding = false;
  }
}

module.exports = new StudentsService();
