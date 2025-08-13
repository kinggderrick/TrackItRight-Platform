package in.sb.tir.controller;

import in.sb.tir.model.Authority;
import in.sb.tir.service.AuthorityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authorities")
public class AuthorityController {

    private final AuthorityService authorityService;

    public AuthorityController(AuthorityService authorityService) {
        this.authorityService = authorityService;
    }

    @PostMapping
    public Authority createAuthority(@RequestBody Authority authority) {
        return authorityService.createAuthority(authority);
    }

    @GetMapping
    public List<Authority> getAllAuthorities() {
        return authorityService.getAllAuthorities();
    }
}
