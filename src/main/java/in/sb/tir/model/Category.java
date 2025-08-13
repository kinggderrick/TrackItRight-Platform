package in.sb.tir.model;

import jakarta.persistence.*;


@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // means, "Roads", "Water", "Electricity" etc...

    private String description;

    @ManyToOne
    @JoinColumn(name = "authority_id")
    private Authority authority;
    

    public Authority getAuthority() { 
    	return authority; 
    }
    public void setAuthority(Authority authority) { 
    	this.authority = authority; 
    }

    
    public Long getId() { 
    	return id; 
    }
    public void setId(Long id) { 
    	this.id = id; 
    }

    public String getName() { 
    	return name; 
    }
    public void setName(String name) { 
    	this.name = name; 
    }

    public String getDescription() { 
    	return description; 
    }
    public void setDescription(String description) { 
    	this.description = description; 
    }
}
