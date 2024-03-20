package com.RestApiProject.RestApiProject.service;
import com.RestApiProject.RestApiProject.entity.Student;
import java.util.List;
public interface StudentService {
    List<Student> findAll();
    Student findByid(int theId);
    Student save(Student theStudent);
    void deleteById(int theId);
    Student updateStudent(Student student);
}
