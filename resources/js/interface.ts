import { HttpMethod } from "./helper/enum";

export interface User {
    name: string;
    role_name: string;
    email: string;
    status: number;
    id?: number;
}

export interface UserUpdate {
    name: string;
    role_name: string;
    email: string;
    status: number;
    role_id: number;
    id?: number;
}

export interface Roles {
    id?: number;
    role_name: string;
    abilities: string;
}

export interface Feedback {
    text: string;
    score: number;
    date?: string,
    flying_title?: string,
    user_name?: string,
    flying_price?: number
}

export interface FeedbackPag extends Pag {
    data: Feedback[];
}

export interface Order extends OrderUser {
    id: number;
    status: string;
    text: string;
    user_id: number;
    date: string;
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
    textbutton?: string;
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

export interface UserPag extends Pag {
    data: User[];
}

export interface SuccessOrder
{
    title: string
    order_id: number;
}

export interface OrderPag extends Pag {
    data: Order[];
}

export interface NewsFormProps {
    // submit: (e: FormEvent<HTMLFormElement>) => void;
    method: HttpMethod;
    url: string;
    textbutton?: string,
    title?: string;
    description?: string;
}

export interface Vakancies {
    deleted_at?: boolean,
    description: string,
    id?: number,
    image: string,
    payment: number,
    title: string
}

export interface VakanciesPag extends Pag {
    data: Vakancies[]
}
