package in.sb.tir.service;

import in.sb.tir.model.Complaint;
import in.sb.tir.repository.ComplaintRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class ComplaintService {

    private final ComplaintRepository complaintRepository;

    public ComplaintService(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    public Complaint createComplaint(Complaint complaint) {
        return complaintRepository.save(complaint);
    }

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }
    
    public Complaint updateStatus(Long id, String status) {
        Complaint complaint = complaintRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));
        
        complaint.setStatus(status);
        
        return complaintRepository.save(complaint);
    }

    public Complaint addFeedback(Long id, String feedback) {
        Complaint complaint = complaintRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));
        
        complaint.setFeedback(feedback);
        
        return complaintRepository.save(complaint);
    }

    public List<Complaint> getComplaintsByAuthority(Long authorityId) {
        return complaintRepository.findByCategory_Authority_Id(authorityId);
    }
    
    public Map<String, Long> getStatusSummaryByAuthority(Long authorityId) {
        List<Object[]> results = complaintRepository.countComplaintsByStatusForAuthority(authorityId);
        Map<String, Long> summary = new HashMap<>();
        for (Object[] row : results) {
            summary.put((String) row[0], (Long) row[1]);
        }
        return summary;
    }
    
    public Map<String, Long> getStatusSummaryByAuthorityAndDate(
            Long authorityId,
            LocalDateTime startDate,
            LocalDateTime endDate
    ) {
        List<Object[]> results = complaintRepository
                .countComplaintsByStatusForAuthorityAndDateRange(authorityId, startDate, endDate);

        Map<String, Long> summary = new HashMap<>();
        for (Object[] row : results) {
            summary.put((String) row[0], (Long) row[1]);
        }
        return summary;
    }

    public List<Complaint> getComplaintsByAuthorityAndDate(
            Long authorityId,
            LocalDateTime startDate,
            LocalDateTime endDate
    ) {
        return complaintRepository.findByAuthorityIdAndDateRange(authorityId, startDate, endDate);
    }

    public List<Complaint> getComplaintsByUser(Long userId) {
        return complaintRepository.findByUser_Id(userId);
    }

}
