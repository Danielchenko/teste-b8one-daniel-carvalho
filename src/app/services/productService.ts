import { Product } from "../types";

export async function getAllProducts() {
    const products: Product[] = [
        {
          id: 1,
          name: 'Monitor LED 27" Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
          image: '/images/monitor.png',
          price: 2813.99,
          discountValue: 2599.00,
          installment: 10
          
        },
        {
          id: 2,
          name: 'Monitor LED 27" Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
          image: '/images/monitor.png',
          price: 2813.99,
          discountValue: 2599.00,
          installment: 10
        }
      ];
  return products

}