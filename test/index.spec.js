import { expect } from 'chai';
import sparrow from '../lib/sparrow';
let lib;
describe('sparrow test',()=>{
	before(()=>{
		lib = new sparrow()
	})
	describe('sparrow test name',()=>{
		it('shoud return sparrow',()=>{
			expect(lib.name).to.be.equal('sparrow')
		})
	})
})