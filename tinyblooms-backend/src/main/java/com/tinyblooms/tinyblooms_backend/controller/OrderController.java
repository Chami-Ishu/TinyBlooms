package com.tinyblooms.tinyblooms_backend.controller;

import com.tinyblooms.tinyblooms_backend.Order;
import com.tinyblooms.tinyblooms_backend.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.createOrder(order);
        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/summary")
    public ResponseEntity<?> getSummary() {

        return ResponseEntity.ok(
                Map.of(
                        "totalOrders", orderService.getTotalOrders(),
                        "pendingOrders", orderService.getPendingOrders(),
                        "confirmedOrders", orderService.getConfirmedOrders(),
                        "deliveredOrders", orderService.getDeliveredOrders(),
                        "totalSales", orderService.getTotalSales()
                )
        );
    }

    @GetMapping("/{id}")
public ResponseEntity<Order> getOrderById(@PathVariable Long id) {

    return orderService.getAllOrders()
            .stream()
            .filter(order -> order.getId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
}

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        Order order = orderService.getAllOrders()
                .stream()
                .filter(o -> o.getId().equals(id))
                .findFirst()
                .orElse(null);

        if (order == null) {
            return ResponseEntity.notFound().build();
        }

        order.setStatus(status);

        return ResponseEntity.ok(orderService.createOrder(order));
    }
}