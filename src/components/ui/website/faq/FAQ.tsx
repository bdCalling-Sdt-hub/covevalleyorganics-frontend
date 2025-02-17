"use client";
import Heading from "@/components/shared/Heading";
import { Collapse } from "antd";
import { Plus } from "lucide-react";

const getItems = (panelStyle: any) => [
  {
    key: "1",
    label: (
      <p className="font-bold text-sm uppercase">How do I use the cubes?</p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        Our frozen baby food cubes are designed to make mealtime simple and
        stress-free. Just pop out the desired number of cubes and:
        <br />
        <strong>Thaw in the fridge:</strong> Let them thaw in the refrigerator
        for a few hours or overnight.
        <br />
        <strong>Warm up:</strong> You can gently warm the cubes on the stovetop
        or microwave until they reach the desired temperature. Be sure to stir
        and check for hot spots before serving.
        <br />
        <strong>Mix and match:</strong> Feel free to combine different cubes for
        varied and balanced meals.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: (
      <p className="font-bold text-sm uppercase">
        Are the products allergen-free?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        We prioritize using simple, whole ingredients in our cubes, and we take
        care to avoid common allergens. However, we recommend checking the
        ingredient lists carefully for any potential sensitivities. If you have
        specific concerns, please reach out to us directly, and we’ll be happy
        to provide more information about allergens.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: (
      <p className="font-bold text-sm uppercase">
        Where do you source your ingredients?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        At Cove Valley, we source our ingredients from trusted, certified
        organic farms. We work closely with local and sustainable farmers to
        ensure our fruits and vegetables are grown without pesticides or harmful
        chemicals. Our farm-to-table approach ensures that your baby gets the
        freshest, most nutritious produce available.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: (
      <p className="font-bold text-sm uppercase">
        What makes frozen baby food better?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        Freezing is a natural way to preserve the nutrients, flavour, and
        freshness of our organic ingredients. We flash-freeze our purees at peak
        freshness, locking in essential vitamins and minerals without the need
        for preservatives. This ensures that your baby is getting wholesome,
        nutrient-dense food in every cube.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: (
      <p className="font-bold text-sm uppercase">
        How long can I store the cubes?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        Our baby food cubes can be stored in the freezer for up to 12 months. To
        ensure the best taste and quality, we recommend using them within this
        timeframe.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: (
      <p className="font-bold text-sm uppercase">
        How many cubes should I use per meal?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        Each cube is perfectly portioned for convenience. For younger babies,
        you may only need one or two cubes per meal, while older babies with
        larger appetites may require more. You can easily adjust based on your
        baby’s needs.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "7",
    label: (
      <p className="font-bold text-sm uppercase">
        Do your cubes contain any additives or preservatives?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        No, our cubes are made from organic ingredients. We never use additives,
        preservatives, or fillers, so you can feel confident that your baby is
        getting pure, wholesome food.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "8",
    label: (
      <p className="font-bold text-sm uppercase">Are your products organic?</p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        Yes, all of our ingredients are organic, ensuring that every cube is
        free from harmful chemicals.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "9",
    label: (
      <p className="font-bold text-sm uppercase">
        Can I mix the cubes with other foods?
      </p>
    ),
    children: (
      <p className="text-lg tracking-wider">
        Absolutely! You can easily mix our cubes with other foods like oatmeal,
        yogurt, or grains to create a balanced and varied meal for your baby.
      </p>
    ),
    style: panelStyle,
  },
];

const FAQ = () => {
  const panelStyle = {
    marginBottom: 10,
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid rgba(149, 157, 165, 0.2)",
    padding: "4px",
    fontSize: "14px",
  };
  return (
    <div className="container text-[#d1e3b7]">
      <Heading className="items-center text-center">
        Your Questions, <br /> Answered
      </Heading>
      <div className="mt-12 mb-12">
        <Collapse
          bordered={false}
          items={getItems(panelStyle)}
          expandIconPosition="end"
          expandIcon={() => <Plus color="#F37D2B" />}
          size="large"
        />
      </div>
    </div>
  );
};

export default FAQ;
