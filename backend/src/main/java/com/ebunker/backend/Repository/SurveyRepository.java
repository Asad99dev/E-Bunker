package com.ebunker.backend.Repository;

import java.util.Optional;

import com.ebunker.backend.Model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface SurveyRepository extends JpaRepository <Survey, Long> {
    Optional<Survey> findById (int id);

}