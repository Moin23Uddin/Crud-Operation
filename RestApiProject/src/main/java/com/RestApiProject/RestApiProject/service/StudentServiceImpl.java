package com.RestApiProject.RestApiProject.service;
import com.RestApiProject.RestApiProject.dao.StudentDao;
import com.RestApiProject.RestApiProject.entity.Student;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class StudentServiceImpl implements StudentService{
    private StudentDao studentDao;
@Autowired
public StudentServiceImpl(StudentDao theStudentDao){
    studentDao=theStudentDao;
}
@Override
    public List<Student> findAll() {
        return studentDao.findAll();
    }
    @Override
    public Student findByid(int theId) {
        return studentDao.findByid(theId);
    }
    @Override
    @Transactional
    public Student save(Student theStudent) {
        return studentDao.save(theStudent);
    }
    @Transactional
    @Override
    public void deleteById(int theId) {
        studentDao.deleteById(theId);
    }
    @Transactional
    @Override
    public Student updateStudent(Student student) {
        return studentDao.updateStudent(student);
    }
}
