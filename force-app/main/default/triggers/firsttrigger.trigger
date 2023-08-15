trigger firsttrigger on Account (before insert) {
for (Account acc:trigger.new) {
    acc.BillingCity='london';
}
}