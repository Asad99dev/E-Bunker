package com.ebunker.backend.Controller;

import javax.validation.Valid;

import com.ebunker.backend.Model.Survey;
import com.ebunker.backend.Repository.SurveyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/survey")
public class SurveyController {

    @Autowired
    SurveyRepository surveyRepository;

    @PostMapping("/submit")
    public String submitSurvey (@Valid @RequestBody Survey survey) {

        surveyRepository.save(survey);

        return "Submitted";

    }


}
