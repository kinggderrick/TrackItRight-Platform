package in.sb.tir.controller;

import in.sb.tir.model.Complaint;
import in.sb.tir.service.ComplaintService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping
    public Complaint createComplaint(@RequestBody Complaint complaint) {
        return complaintService.createComplaint(complaint);
    }

    @GetMapping
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }
    
    @PatchMapping("/{id}/status")
    public Complaint updateStatus(@PathVariable Long id, @RequestParam String status) {
        return complaintService.updateStatus(id, status);
    }

    @PatchMapping("/{id}/feedback")
    public Complaint addFeedback(@PathVariable Long id, @RequestParam String feedback) {
        return complaintService.addFeedback(id, feedback);
    }
    
    @GetMapping("/authority/{authorityId}")
    public List<Complaint> getComplaintsByAuthority(@PathVariable Long authorityId) {
        return complaintService.getComplaintsByAuthority(authorityId);
    }
    
    @GetMapping("/authority/{authorityId}/summary")
    public Map<String, Long> getStatusSummary(@PathVariable Long authorityId) {
        return complaintService.getStatusSummaryByAuthority(authorityId);
    }

    @GetMapping("/authority/{authorityId}/summary/date")
    public Map<String, Long> getStatusSummaryByDate(
            @PathVariable Long authorityId,
            @RequestParam String start,
            @RequestParam String end
    ) {
        LocalDateTime startDate = LocalDateTime.parse(start);
        LocalDateTime endDate = LocalDateTime.parse(end);
        return complaintService.getStatusSummaryByAuthorityAndDate(authorityId, startDate, endDate);
    }

    @GetMapping("/authority/{authorityId}/date")
    public List<Complaint> getComplaintsByDateRange(
            @PathVariable Long authorityId,
            @RequestParam String start,
            @RequestParam String end
    ) {
        LocalDateTime startDate = LocalDateTime.parse(start);
        LocalDateTime endDate = LocalDateTime.parse(end);
        return complaintService.getComplaintsByAuthorityAndDate(authorityId, startDate, endDate);
    }
    
    @GetMapping("/user/{userId}")
    public List<Complaint> getComplaintsByUser(@PathVariable Long userId) {
        return complaintService.getComplaintsByUser(userId);
    }



}
