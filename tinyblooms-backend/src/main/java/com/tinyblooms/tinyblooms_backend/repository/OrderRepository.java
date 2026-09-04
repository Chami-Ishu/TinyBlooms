package com.tinyblooms.tinyblooms_backend.repository;

import com.tinyblooms.tinyblooms_backend.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}