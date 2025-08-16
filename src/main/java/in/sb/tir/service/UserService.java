package in.sb.tir.service;

import in.sb.tir.model.User;
import in.sb.tir.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {
        if (user.getRole() == null) {  
            user.setRole(User.Role.USER);
        }
        return userRepository.save(user);
    }

}
