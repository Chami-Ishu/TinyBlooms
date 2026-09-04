package com.tinyblooms.tinyblooms_backend.service;

import com.tinyblooms.tinyblooms_backend.Order;
import com.tinyblooms.tinyblooms_backend.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public long getTotalOrders() {
        return orderRepository.count();
    }

    public long getPendingOrders() {
        return orderRepository.findAll()
                .stream()
                .filter(order -> "Pending".equals(order.getStatus()))
                .count();
    }

    public long getConfirmedOrders() {
    return orderRepository.findAll()
            .stream()
            .filter(order -> "Confirmed".equals(order.getStatus()))
            .count();
    }

    public long getDeliveredOrders() {
    return orderRepository.findAll()
            .stream()
            .filter(order -> "Delivered".equals(order.getStatus()))
            .count();
    }

    public double getTotalSales() {
        return orderRepository.findAll()
                .stream()
                .mapToDouble(Order::getTotalPrice)
                .sum();
    }
}