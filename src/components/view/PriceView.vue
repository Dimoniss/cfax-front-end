<template>
  <h2>Price Details</h2>
  <div class="offer-container">
    <div class="offer-block">
      <div class="price-container">
        <h3>Buy {{ store.offer[0].count }} report</h3>
        <div class="discounted-price">
          <span class="new-price">${{ calculatePrice(store.offer[0].count) }}</span>
        </div>
      </div>
      <p>Increase in balance one report at standard price.</p>
      <div class="buy-button">
        <button @click="buyOffer(store.offer[0].count, store.offer[0].discount)">Pay</button>
      </div>
    </div>
    <div class="offer-block">
      <div class="price-container">
        <h3>Buy {{ store.offer[1].count }} reports</h3>
        <div class="old-price">
          <span class="strikethrough">${{ calculatePrice(store.offer[1].count) }}</span>
        </div>
        <div class="discounted-price">
          <span class="new-price"
            >${{ calculateDiscountedPrice(store.offer[1].count, store.offer[1].discount) }}</span
          >
        </div>
      </div>
      <p>
        Increase in balance {{ store.offer[1].count }} reports with {{ store.offer[1].discount }}%
        discount price.
      </p>
      <div class="buy-button">
        <button @click="buyOffer(store.offer[1].count, store.offer[1].discount)">Pay</button>
      </div>
    </div>
    <div class="offer-block">
      <div class="price-container">
        <h3>Buy {{ store.offer[2].count }} reports</h3>
        <div class="old-price">
          <span class="strikethrough">${{ calculatePrice(store.offer[2].count) }}</span>
        </div>
        <div class="discounted-price">
          <span class="new-price"
            >${{ calculateDiscountedPrice(store.offer[2].count, store.offer[2].discount) }}</span
          >
        </div>
      </div>
      <p>
        Increase in balance {{ store.offer[2].count }} reports with {{ store.offer[2].discount }}%
        discount price.
      </p>
      <div class="buy-button">
        <button @click="buyOffer(store.offer[2].count, store.offer[2].discount)">Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/utils/store'

export default {
  name: 'CheckVINView',
  data() {
    return {
      store
    }
  },

  methods: {
    buyOffer(number, discount) {
      console.log('Number:', number)
      console.log('Discount:', discount)
      // Logic for buying the offer
      console.log('Offer bought!')
    },
    calculateDiscountedPrice(number, discount) {
      if (store.currentUser.isLoggedIn) {
        const originalPrice = this.store.currentUser.user.price * number
        const discountedPrice = originalPrice - originalPrice * (discount / 100)
        return discountedPrice.toFixed(2)
      } else {
        const originalPrice = this.store.defaultPrice * number
        const discountedPrice = originalPrice - originalPrice * (discount / 100)
        return discountedPrice.toFixed(2)
      }
    },
    calculatePrice(number) {
      if (store.currentUser.isLoggedIn) {
        const originalPrice = this.store.currentUser.user.price * number
        return originalPrice.toFixed(2)
      } else {
        const originalPrice = this.store.defaultPrice * number
        return originalPrice.toFixed(2)
      }
    }
  }
}
</script>

<style scoped>
.offer-container {
  display: flex;
  justify-content: space-between; /* Adjust as needed */
  align-items: center;
  gap: 20px; /* Adjust the gap between blocks */
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 10px;
}

.offer-block {
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
}

.buy-button {
  flex: 0 0 auto; /* Prevent button from stretching */
}

.price-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.old-price,
.discounted-price {
  padding: 5px;
}

.strikethrough {
  text-decoration: line-through;
  color: #888; /* Color for the old price */
}

.new-price {
  font-weight: bold;
  color: #33a23d; /* Color for the discounted price */
  font-size: 20px;
}
</style>
