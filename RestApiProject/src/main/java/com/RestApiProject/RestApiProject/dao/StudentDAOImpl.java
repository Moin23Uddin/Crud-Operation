package com.RestApiProject.RestApiProject.dao;
import com.RestApiProject.RestApiProject.entity.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public class StudentDAOImpl implements StudentDao{
    private EntityManager entityManager;
    @Autowired
    public StudentDAOImpl(EntityManager theEntityManager){
        entityManager=theEntityManager;
    }
    @Override
    public List<Student> findAll() {
        TypedQuery<Student> theQuery=entityManager.createQuery("from Student",Student.class);
        List<Student> students=theQuery.getResultList();
       return students;
    }
    @Override
    public Student findByid(int theId) {
        Student theStudent=entityManager.find(Student.class,theId);
        return theStudent;
    }
    @Override
    public Student save(Student theStudent) {
        Student dbStudent=entityManager.merge(theStudent);
        return dbStudent;
    }
    @Override
    public void deleteById(int theId) {
        Student theStudent=entityManager.find(Student.class,theId);
        entityManager.remove(theStudent);
    }
    @Override
    public Student updateStudent(Student student) {
    try {
        return entityManager.merge(student);
    } catch (Exception ex) {
        ex.printStackTrace();
        return null;
    }
    }
}
