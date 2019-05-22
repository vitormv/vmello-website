import React from 'react';
import { Section } from 'src/components/Section';
import { SocialButtons } from 'src/components/SocialButtons';

const Footer = () => (
    <Section>
        <div className="o-headline">
            <div className="o-headline__brand o-brand">
                <h1 className="o-brand__name o-brand__name--small o-headline__title">
                    <span className="o-brand__word">
                        Vitor
                    </span>
                    <span className="o-brand__word o-brand__word--highlight">
                        &nbsp;Mello
                    </span>
                </h1>
            </div>

            <SocialButtons />
        </div>
    </Section>
);

export { Footer };
