"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name is required",
    })
    .max(50),
  email: z.string().email({
    message: "Email is required",
  }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number is required",
    })
    .max(15),
  address: z.string().min(2, {
    message: "Address is required",
  }),
  city: z.string().min(2, {
    message: "City is required",
  }),
  province: z.string().min(2, {
    message: "Province is required",
  }),
  zipCode: z
    .string()
    .min(4, {
      message: "Postal code is required",
    })
    .max(4),
  country: z.string().min(2, {
    message: "Country is required",
  }),
  paymentMethod: z.enum(["e-Money/Card", "Cash On Delivery"], {
    required_error: "You need to select a payment method.",
  }),
  cardNumber: z.string().min(16, {
    message: "Card number is required",
  }),
  cardExpiry: z.string().min(4, {
    message: "Card expiry is required",
  }),
  cardCvv: z.string().min(3, {
    message: "Card CVV is required",
  }),
});
export function CheckoutForm() {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      province: "",
      zipCode: "",
      country: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
    },
  });

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Order Submitted Successfully");
    dispatch({
      type: "CLEAR_CART",
    });
    router.push("/");
  };
  const calculateTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <motion.form
                className="space-y-8 bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto"
                onSubmit={(e) => e.preventDefault()}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                <h2 className="text-3xl text-center md:text-start md:text-5xl font-semibold">
                  CHECKOUT
                </h2>
                <motion.div variants={fieldVariants}>
                  <h2 className="text-sm text-center md:text-start font-semibold mb-6 text-primary tracking-[0.5rem]">
                    BILLING DETAILS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jack WebDev"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jack@webdev.com"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="065 545 6565"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <h2 className="text-sm text-center md:text-start font-semibold mb-6 text-primary tracking-[0.5rem]">
                    SHIPPING INFO
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Home Address</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="7653 Jack Mbu Avenue, Jack Town"
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="1297"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="province"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Province</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Gauteng"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Johannesburg"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <motion.div variants={fieldVariants}>
                          <FormItem className="flex flex-col">
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="South Africa"
                                {...field}
                                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage style={{ color: "red" }} />
                          </FormItem>
                        </motion.div>
                      )}
                    />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <h2 className="text-sm text-center md:text-start font-semibold mb-6 text-primary tracking-[0.5rem]">
                    PAYMENT DETAILS
                  </h2>
                  <div>
                    <div className="md:flex md:justify-between mb-8">
                      <h3 className="text-lg font-medium mb-2">
                        Payment Method
                      </h3>
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem className="md:w-1/2">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex flex-col"
                              >
                                <FormItem className="flex items-center border border-primary py-4 px-6 w-full rounded-lg space-y-0 gap-x-2">
                                  <FormControl>
                                    <RadioGroupItem value="e-Money/Card" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    E-Money/Card
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center border border-primary py-4 px-6 w-full rounded-lg space-y-0 gap-x-2">
                                  <FormControl>
                                    <RadioGroupItem value="Cash On Delivery" />
                                  </FormControl>
                                  <FormLabel className="font-normal mx-0 my-0">
                                    Cash on delivery
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {form.watch("paymentMethod") === "e-Money/Card" ? (
                      <div className="grid gap-y-4 my-8">
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <motion.div variants={fieldVariants}>
                              <FormItem className="flex flex-col">
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    {...field}
                                    className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </FormControl>
                                <FormMessage style={{ color: "red" }} />
                              </FormItem>
                            </motion.div>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="cardExpiry"
                          render={({ field }) => (
                            <motion.div variants={fieldVariants}>
                              <FormItem className="flex flex-col">
                                <FormLabel>Card Expiry Date</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="12/25"
                                    {...field}
                                    className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </FormControl>
                                <FormMessage style={{ color: "red" }} />
                              </FormItem>
                            </motion.div>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cardCvv"
                          render={({ field }) => (
                            <motion.div variants={fieldVariants}>
                              <FormItem className="flex flex-col">
                                <FormLabel>Card CVV</FormLabel>
                                <FormControl>
                                  <Input
                                    type="password"
                                    placeholder="754"
                                    {...field}
                                    className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </FormControl>
                                <FormMessage style={{ color: "red" }} />
                              </FormItem>
                            </motion.div>
                          )}
                        />
                      </div>
                    ) : (
                      <motion.div
                        className="mt-4 flex flex-col items-start space-y-2 md:col-span-2 my-8"
                        variants={fieldVariants}
                      >
                        <Image
                          src={"/assets/checkout/icon-cash-on-delivery.svg"}
                          alt="Cash on delivery"
                          width={50}
                          height={50}
                        />
                        <p className="text-gray-700">
                          The Cash on Delivery option enables you to pay in cash
                          when our delivery courier arrives at your residence.
                          Just make sure your address is correct so that your
                          order will not be cancelled.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.form>
            </Form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={item.image.thumbnail}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      R{item.price * item.quantity}
                    </p>
                  </div>
                ))}

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">R{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">R50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">VAT (Included)</span>
                    <span className="font-medium">
                      R{calculateTotal() * 0.15}
                    </span>
                  </div>
                  <div className="flex justify-between pt-4 border-t">
                    <span className="text-lg font-bold text-gray-900">
                      Grand Total
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      R{calculateTotal() + 50 + calculateTotal() * 0.15}
                    </span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-foreground text-white py-4 rounded-lg font-semibold hover:bg-primary transition-colors mt-6"
                  variants={fieldVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSubmit(form.getValues())}
                >
                  Complete Order
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
