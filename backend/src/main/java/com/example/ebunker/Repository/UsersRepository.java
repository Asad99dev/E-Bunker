package com.example.ebunker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ebunker.Model.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {

    Users existsByUsername(String username);

    Users existsByEmail(String email);

}
