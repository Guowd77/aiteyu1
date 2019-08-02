<template>
	<view class="cu-form-group">
		<view class="title">{{formItem.placeHolder}}</view>
		<input 
			placeholder="三字标题" 
			name="input"
			confirm-type="search" 
			:placeholder="'请输入'+formItem.placeHolder" 
			v-bind:value="currentValue"
			v-on:change="handleInput"		
		>
		</input>
	</view>
</template>

<script>
	export default {
		props: [
			'formItem'
		],
		data() {
			return {
				currentValue:null
			};
		},
		mouted(){
			console.log(this.$props.formItem)
		},
		methods:{
			handleInput:function(e){
			    let value = e.target.value
			    if (value === this.currentValue) {
					return
			    } else {
					this.currentValue = value
			    }
				this.$emit('input', value)
			  }
		}
	}
</script>

<style>
.uni-form-item{
	padding: 10upx 0;
	width: 590upx;
	margin: 0 auto;
}
.uni-form-item image{
	display: inline-block;
	width:50upx;
	height: 50upx;
	margin-right: 27upx;
}
.uni-form-item input{
	display: inline-block;
	width: 500upx;
	background: #F6F6F6;
	border: #EBEBEB;
	border-radius: 15upx;
	font-size: 30upx;
	padding-left: 15upx;
}
</style>
