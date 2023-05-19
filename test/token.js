const {expect} = require('chai');
// const {ethers}= require('hardhat')
describe('Token Contract', () => {
    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;
    
    beforeEach(async function (){
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2,...addrs] = await ethers.getSigners();
        hardhatToken= await Token.deploy();
        
    })
    describe('Deployment', () => { 
        it('should set the right owner', async function (){
            expect(await hardhatToken.owner()).to.equal(owner.address)
        })
        it('should assign the toal supply of tokens to the owners', async function(){
            const ownerbalance= await hardhatToken.balanceOf(owner.address)
            expect(await hardhatToken.totalSupply()).to.equal(ownerbalance)
        })
     })
    describe('transaction ', () => { 
        it('should trasnfer token between the accounts', async function (){
            await hardhatToken.transfer(addr1.address, 5);
            const addr1Balance = await hardhatToken.balanceOf(addr1.address)
            expect(addr1Balance).to.equal(5)

            await hardhatToken.connect(addr1).transfer(addr2.address,5);
            const addr2Balace = await hardhatToken.balanceOf(addr2.address);
            expect(addr2Balace).to.equal(5)
        })
        it('should update balacnes after transfer', async function (){
            const initalOwnerBalance= await hardhatToken.balanceOf(owner.address);
            await hardhatToken.transfer(addr1.address, 5);
            await hardhatToken.transfer(addr2.address, 10)
            const finalOwnerBalance= await hardhatToken.balanceOf(owner.address)
            expect(finalOwnerBalance).to.equal(initalOwnerBalance-15)

            const addr1balance = await hardhatToken.balanceOf(addr1.address)
            expect(addr1balance).to.equal(5)
        })
     })
});
