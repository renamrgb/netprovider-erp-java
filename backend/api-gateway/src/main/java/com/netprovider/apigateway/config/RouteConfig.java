package com.netprovider.apigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RouteConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                // Serviço de Inventário
                .route("inventory-service", r -> r.path("/api/inventory/**")
                        .uri("lb://inventory-service"))
                
                // Serviço Financeiro
                .route("financial-service", r -> r.path("/api/financial/**")
                        .uri("lb://financial-service"))
                
                // Serviço de Clientes
                .route("customer-service", r -> r.path("/api/customer/**")
                        .uri("lb://customer-service"))
                
                // Serviço de Rede
                .route("network-service", r -> r.path("/api/network/**")
                        .uri("lb://network-service"))
                
                // Serviço de Planos
                .route("plan-service", r -> r.path("/api/plan/**")
                        .uri("lb://plan-service"))
                
                .build();
    }
} 