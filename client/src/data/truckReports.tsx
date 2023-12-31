interface calculationsInterface {
  type: string;
  value: string;
  trend: string;
  imagePath: string;
}

export const calculations: calculationsInterface[] = [
  {
    type: "Sales",
    value: "10543.00",
    trend: "Increase",
    imagePath: "../assets/sales.png",
  },
  {
    type: "Expenses",
    value: "4322.00",
    trend: "Decrease",
    imagePath: "../assets/expenses.png",
  },
  {
    type: "Profit",
    value: "6221.00",
    trend: "Increase",
    imagePath: "../assets/profit.png",
  },
];

export const ReceivingReportsData = [
  {
    report_id: 1,
    truck_number: "HJP 557",
    trucking_company: "Maple Leaf Trucking",
    received: true,
    unloaded: true,
    received_at: "2023-01-01 10:30:00",
    total_products_quantity_expected: 400,
    total_products_quantity_received: 380,
  },
  {
    report_id: 2,
    truck_number: "ABC 123",
    trucking_company: "Fresh Express Carriers",
    received: true,
    unloaded: true,
    received_at: "2023-01-02 11:45:00",
    total_products_quantity_expected: 300,
    total_products_quantity_received: 250,
  },
  {
    report_id: 3,
    truck_number: "XYZ 789",
    trucking_company: "Harvest Transport Solutions",
    received: true,
    unloaded: true,
    received_at: "2023-01-03 09:15:00",
    total_products_quantity_expected: 200,
    total_products_quantity_received: 180,
  },
  {
    report_id: 4,
    truck_number: "JKL 456",
    trucking_company: "Sunrise Freight Services",
    received: true,
    unloaded: true,
    received_at: "2023-01-04 14:20:00",
    total_products_quantity_expected: 150,
    total_products_quantity_received: 120,
  },
  {
    report_id: 5,
    truck_number: "LMN 789",
    trucking_company: "Green Grocers Logistics",
    received: true,
    unloaded: true,
    received_at: "2023-01-05 08:30:00",
    total_products_quantity_expected: 250,
    total_products_quantity_received: 220,
  },
  {
    report_id: 6,
    truck_number: "PQR 234",
    trucking_company: "Organic Harvest Transport",
    received: true,
    unloaded: true,
    received_at: "2023-01-06 12:10:00",
    total_products_quantity_expected: 350,
    total_products_quantity_received: 320,
  },
  {
    report_id: 7,
    truck_number: "DEF 567",
    trucking_company: "Nature's Bounty Logistics",
    received: true,
    unloaded: true,
    received_at: "2023-01-07 13:45:00",
    total_products_quantity_expected: 180,
    total_products_quantity_received: 150,
  },
  {
    report_id: 8,
    truck_number: "GHI 890",
    trucking_company: "Farm Fresh Carriers",
    received: true,
    unloaded: true,
    received_at: "2023-01-08 16:00:00",
    total_products_quantity_expected: 280,
    total_products_quantity_received: 250,
  },
  {
    report_id: 9,
    truck_number: "UVW 123",
    trucking_company: "Golden Fields Transport",
    received: true,
    unloaded: true,
    received_at: "2023-01-09 10:55:00",
    total_products_quantity_expected: 200,
    total_products_quantity_received: 170,
  },
  {
    report_id: 10,
    truck_number: "MNO 456",
    trucking_company: "Harmony Farms Freight",
    received: true,
    unloaded: true,
    received_at: "2023-01-10 15:30:00",
    total_products_quantity_expected: 300,
    total_products_quantity_received: 280,
  },
];
