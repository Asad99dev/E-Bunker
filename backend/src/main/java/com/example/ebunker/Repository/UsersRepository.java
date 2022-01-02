package com.example.ebunker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.ebunker.Model.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {

    @Query("SELECT u FROM User u WHERE u.email = ?1")
    Users existsByEmail(String email);

}
