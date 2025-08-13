package in.sb.tir.service;

import in.sb.tir.model.Authority;
import in.sb.tir.repository.AuthorityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorityService {

    private final AuthorityRepository authorityRepository;

    public AuthorityService(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    public Authority createAuthority(Authority authority) {
        return authorityRepository.save(authority);
    }

    public List<Authority> getAllAuthorities() {
        return authorityRepository.findAll();
    }
}
