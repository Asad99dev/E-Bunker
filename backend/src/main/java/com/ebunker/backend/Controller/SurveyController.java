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
    public String submitSurvey(@Valid @RequestBody Survey survey) {

        Survey submitted = surveyRepository.save(survey);

        if (submitted.getTotal() <= 15) {
            return "Your cybersecurity score is quite low, we recommend you take immediate action to protect your accounts and devices. Think of the things in the survey you never or rarely do then try and make changes so that you do them more often";
        } else if (submitted.getTotal() <= 35) {

            return "You have an average cybersecurity score, you do take care to protect your devices and accounts to an extent but there is room for improvement. For extra peace of mind, we recommend you go through all the protections you have in place and see if you can make any changes to stay safer";

        } else {

            return "You have an excellent cybersecurity score, you take the utmost care in protecting your accounts and devices and there is not much you can do to improve. We recommend you keep this up and make sure to schedule checks regularly to make sure your protections are up to date";
        }

    }

}
