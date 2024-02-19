package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.QnARepository;
import com.app.dto.QnADTO;
import com.app.dto.QnAddDTO;
import com.app.entities.QnA;

@Service
@Transactional
public class QnAServiceImpl implements QnAService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private QnARepository qnARepository;

	@Override
	public List<QnADTO> getAllQuestionAnswers(Long courseId) {
		List<QnA> qnaList = qnARepository.findByCourseId(courseId);
		List<QnADTO> qnaDtoList = qnaList.stream().map(qna -> mapper.map(qna, QnADTO.class))
				.collect(Collectors.toList());

		return qnaDtoList;
	}

//	@Override
//	public String addQuestion(QnADTO qnaDto) {
//	    if (qnaDto.getQuestion() == null || qnaDto.getQuestion().isEmpty()) {
//	        throw new IllegalArgumentException("Question cannot be null or empty.");
//	    }
//
//	    QnA qna = mapper.map(qnaDto, QnA.class);
//	    qnARepository.save(qna);
//	    return "Question submitted successfully.";
//	}

	

	@Override
	public List<QnADTO> getAllUnansweredQuestions(Long courseId) {
		List<QnA> unansweredQuestions = qnARepository.findByCourseIdAndAnswered(courseId, false);
		return unansweredQuestions.stream().map(qna -> mapper.map(qna, QnADTO.class)).collect(Collectors.toList());
	}

	@Override
	public String updateAnswer(Long questionId, String answer) {
		QnA qna = qnARepository.findById(questionId)
				.orElseThrow(() -> new IllegalArgumentException("Question not found with ID: " + questionId));

		qna.setAnswer(answer);
		qna.setAnswered(true);
		qnARepository.save(qna);

		return "Answer updated successfully.";
	}

    @Override
    public void addQuestionToCourse(Long courseId, QnAddDTO qnAddDTO) {
        // Ensure that the QnAddDTO object is not null and the question field is populated
        if (qnAddDTO != null && qnAddDTO.getQuestion() != null && !qnAddDTO.getQuestion().isEmpty()) {
            // Create a new QnA object
            QnA qna = new QnA();
            qna.setCourseId(courseId);
            qna.setQuestion(qnAddDTO.getQuestion());
            qna.setAnswered(false); // Assuming the question is not answered initially
            qna.setAnswer(qnAddDTO.getAnswer()); // Assuming there's no answer initially

            // Save the new QnA object to the database
            qnARepository.save(qna);
        } else {
            // Handle the case where the question field is null or empty
            throw new IllegalArgumentException("Question field is null or empty");
        }
    }
	

	


}
