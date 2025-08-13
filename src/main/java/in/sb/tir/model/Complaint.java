package in.sb.tir.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "complaints")
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // who submitted

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;  // type of complaint

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String status = "Pending"; // default value

    private String feedback; // feedback

    private LocalDateTime createdAt = LocalDateTime.now();

    public Long getId() { 
    	return id; 
    }
    public void setId(Long id) { 
    	this.id = id;
    }

    public User getUser() { 
    	return user; 
    }
    public void setUser(User user) { 
    	this.user = user; 
    }

    public Category getCategory() { 
    	return category; 
    }
    public void setCategory(Category category) { 
    	this.category = category; 
    }

    public String getDescription() { 
    	return description; 
    }
    public void setDescription(String description) { 
    	this.description = description; 
    }

    public String getStatus() { return status; }
    public void setStatus(String status) { 
    	this.status = status; 
    }

    public String getFeedback() { 
    	return feedback; 
    }
    public void setFeedback(String feedback) {
    	this.feedback = feedback;
    }

    public LocalDateTime getCreatedAt() { 
    	return createdAt; 
    }
    public void setCreatedAt(LocalDateTime createdAt) { 
    	this.createdAt = createdAt; 
    }
}
