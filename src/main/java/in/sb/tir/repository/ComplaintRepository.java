package in.sb.tir.repository;

import in.sb.tir.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
	List<Complaint> findByCategory_Authority_Id(Long authorityId);
	
	@Query("SELECT c.status, COUNT(c) FROM Complaint c WHERE c.category.authority.id = :authorityId GROUP BY c.status")
	List<Object[]> countComplaintsByStatusForAuthority(Long authorityId);

	@Query("SELECT c.status, COUNT(c) FROM Complaint c " +
		       "WHERE c.category.authority.id = :authorityId " +
		       "AND c.createdAt BETWEEN :startDate AND :endDate " +
		       "GROUP BY c.status")
		List<Object[]> countComplaintsByStatusForAuthorityAndDateRange(
		        Long authorityId,
		        LocalDateTime startDate,
		        LocalDateTime endDate
		);
		
		
		@Query("SELECT c FROM Complaint c " +
			       "WHERE c.category.authority.id = :authorityId " +
			       "AND c.createdAt BETWEEN :startDate AND :endDate")
			List<Complaint> findByAuthorityIdAndDateRange(
			        Long authorityId,
			        LocalDateTime startDate,
			        LocalDateTime endDate
			);
		
	
	List<Complaint> findByUser_Id(Long userId);


		
}

