import React from 'react'
import propTypes from 'prop-types'

export default function Card(props) {
    return (
        <div class="tiles-item">
            <div class="tiles-item-inner has-shadow">
                <div class="pricing-item-content">
                    <div class="pricing-item-header pb-24 mb-24">
                        <div class="pricing-item-price mb-4">
                            <span class="pricing-item-price-currency h2">$</span>
                            <span class="pricing-item-price-amount h1 pricing-switchable" data-pricing-monthly="34" data-pricing-yearly="27">27</span
                            >
                        </div>
                        <div class="text-xs text-color-low">
                            Lorem ipsum is a common text
						</div>
                    </div>
                    <div class="pricing-item-features mb-40">
                        <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                            What’s included
						</div>
                        <ul class="pricing-item-features-list list-reset text-xs mb-32">
                            <li class="is-checked">
                                Excepteur sint occaecat
                                velit
													</li>
                            <li class="is-checked">
                                Excepteur sint occaecat
                                velit
													</li>
                            <li class="is-checked">
                                Excepteur sint occaecat
                                velit
													</li>
                            <li>
                                Excepteur sint occaecat
                                velit
													</li>
                            <li>
                                Excepteur sint occaecat
                                velit
													</li>
                        </ul>
                    </div>
                </div>
                <div class="pricing-item-cta mb-8">
                    <a class="button button-primary button-block" href="#">Start free trial</a>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}