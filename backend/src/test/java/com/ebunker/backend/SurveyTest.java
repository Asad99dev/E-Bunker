package com.ebunker.backend;


import com.ebunker.backend.Model.Survey;
import com.ebunker.backend.Repository.SurveyRepository;

import static org.junit.Assert.assertThat;

import java.util.Optional;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class SurveyTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    SurveyRepository repository;

    @Test
    public void saveSurveyAnswers() {
        Survey survey = repository.save(new Survey(3, 5, 4, 4, 5, 2, 3, 4, 4, 3, 37));
        entityManager.persistS(survey);
        entityManager.flush();

        Optional<Survey> foundOptional = repository.findById(survey.getId());
        Survey found = foundOptional.get();

        assertThat(found.getId()).isEqualTo(survey.getId());

        
    }
    
}
