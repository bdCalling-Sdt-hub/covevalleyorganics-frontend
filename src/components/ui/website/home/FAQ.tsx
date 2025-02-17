'use client';
import Heading from '@/components/shared/Heading';
import { useGetAllFaqQuery } from '@/redux/features/faq/faqApi';
import { Collapse } from 'antd';
import { Plus } from 'lucide-react';

const FAQ = () => {
      const { data: faqs = [] } = useGetAllFaqQuery([]);

      const panelStyle = {
            marginBottom: 10,
            background: '#fff',
            borderRadius: '10px',
            border: '1px solid rgba(149, 157, 165, 0.2)',
            padding: '4px',
            fontSize: '14px',
      };

      const items = faqs?.map((faq) => ({
            key: faq._id,
            label: <p className="font-medium text-xl text-uppercase">{faq.question}</p>,
            children: <p className="text-lg tracking-wider">{faq.answer}</p>,
            style: panelStyle,
      }));

      return (
            <div className="text-[#d1e3b7] py-10">
                  <div className="container">
                        <Heading className="items-center text-center">
                              Your Questions, <br /> Answered
                        </Heading>
                        <div className="my-5">
                              <Collapse
                                    bordered={false}
                                    items={items}
                                    expandIconPosition="end"
                                    expandIcon={() => <Plus color="#d1e3b7" />}
                                    size="large"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default FAQ;
