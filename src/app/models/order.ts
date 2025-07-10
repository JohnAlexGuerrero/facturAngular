import { WithHoldingTax } from "./with-holding-tax";

export interface Order {
    id:string,
    quantity: number,
    discount_rate: number,
    price: number,
    standard_code_id: number,
    withholding_tax: WithHoldingTax[],
}
