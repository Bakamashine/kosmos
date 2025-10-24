import { HttpMethod } from "./helper/enum";

export interface Feedback {
    feedback: string;
}

export interface Order extends OrderUser {
    id: number;
    status: string;
    text: string;
    user_id: number;
    user_name: string;
}

export interface News {
    id: number;
    title: string;
    description: string;
}

export interface Pag {
    current_page: number;
    data: any[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        active: boolean;
        label: string;
        url: string;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface NewsPag extends Pag {
    data: News[];
}

export interface Flying extends News {
    price: number;
}

export interface FlyingPag extends Pag {
    data: Flying[];
}

export interface NewsCardProps extends News {
    marginBottom?: string;
    redact?: boolean;
}

export interface FlyingFormProps {
    title?: string;
    description?: string;
    price?: number;
    method: HttpMethod;
    url: string;
}

export interface FlyingOrderPick {
    id: number;
    title: string;
    price: number;
}
export interface CreateOrderProps {
    flying: FlyingOrderPick[];
}

export interface OrderUser {
    flying_price: number;
    flying_title: string;
    status: string;
}
