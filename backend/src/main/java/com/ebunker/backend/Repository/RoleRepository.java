package com.ebunker.backend.Repository;

import java.util.Optional;

import com.ebunker.backend.Model.ERole;
import com.ebunker.backend.Model.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}