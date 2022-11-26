const input = require("input");
const studentsService = require("./studentsService");

const handleEnterToABuilding = async () => {
  const studentId = await input.text("Enter id of student");

  studentsService.enterToABuilding(studentId);
};

const handleEnterToBBuilding = async () => {
  const studentId = await input.text("Enter id of student");

  studentsService.enterToBBuilding(studentId);
};

const handleLeaveABuilding = async () => {
  const studentId = await input.text("Enter id of student");

  studentsService.leaveABuilding(studentId);
};

const handleLeaveBBuilding = async () => {
  const studentId = await input.text("Enter id of student");

  studentsService.leaveBBuilding(studentId);
};

const handleAddNewStudent = async () => {
  const studentId = await input.text("Enter student id");

  studentsService.addNewStudent(studentId);
};

const start = async () => {
  console.log("Welcome to DS app");

  while (true) {
    let command = await input.text("Enter command");
    switch (command) {
      case "add_new_student":
        await handleAddNewStudent();
        break;
      case "enter_A_building":
        await handleEnterToABuilding();
        break;
      case "enter_B_building":
        await handleEnterToBBuilding();
        break;
      case "leave_A_building":
        await handleLeaveABuilding();
        break;
      case "leave_B_building":
        await handleLeaveBBuilding();
        break;
    }
  }
};

start();
