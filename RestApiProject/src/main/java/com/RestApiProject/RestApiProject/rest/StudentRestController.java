package com.RestApiProject.RestApiProject.rest;
import com.RestApiProject.RestApiProject.entity.Student;
import com.RestApiProject.RestApiProject.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api")
public class StudentRestController {
    private StudentService studentService;
    public StudentRestController(StudentService theStudentService){
        studentService=theStudentService;
    }
    @GetMapping("/students" )
    public List<Student> findAll(){
        return studentService.findAll();
    }
    @GetMapping("/student/{studentId}" )
    public Student getStudent(@PathVariable int studentId){
        Student theStudent=studentService.findByid(studentId);
        if(theStudent==null){
            throw new RuntimeException("Student Id not found - " + studentId);
        }
        return theStudent;
    }
    @PostMapping("/student")
    public Student addStudent(@RequestBody Student thestudent){
        thestudent.setId(0);
        Student dbStudent = studentService.save(thestudent);
        return dbStudent;
    }
    @PutMapping("/student/{id}")
public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student updatedStudent) {
    Student existingStudent = studentService.findByid(id);
    if (existingStudent == null) {
        return ResponseEntity.notFound().build();
    }
    existingStudent.setFirstname(updatedStudent.getFirstname());
    existingStudent.setLastName(updatedStudent.getLastName());
    existingStudent.setEmail(updatedStudent.getEmail());
    updatedStudent = studentService.updateStudent(existingStudent);
    if (updatedStudent != null) {
        return ResponseEntity.ok(updatedStudent);
    } else {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
    }
@DeleteMapping("/student/{studentId}")
public ResponseEntity<Object> deleteStudent(@PathVariable int studentId){
    Student tempStudent = studentService.findByid(studentId);
    if(tempStudent == null){
        return ResponseEntity.notFound().build();
    }
    studentService.deleteById(studentId);
    return ResponseEntity.ok().build();
}
}



