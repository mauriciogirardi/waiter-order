import { Check, Clock, HourglassMedium } from "phosphor-react";
import { StatusOrder } from "../types/Order";

interface OrderStatusIconProps {
  status: StatusOrder;
}

export const OrderStatusIcon = ({ status }: OrderStatusIconProps) => {
  if (status === "DONE")
    return <Check size={22} weight="bold" color="#45ef56" />;
  if (status === "WAITING")
    return <Clock size={22} color="#bd3038" weight="duotone" />;
  if (status === "IN_PRODUCTION")
    return <HourglassMedium color="#f8b068" size={22} weight="duotone" />;

  return null;
};
