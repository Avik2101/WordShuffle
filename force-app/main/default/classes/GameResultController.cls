public with sharing class GameResultController {
    @AuraEnabled
    public static List<GameResult__c> getGameResults() {
        return new List<GameResult__c>([SELECT Name, GameMode__c, CreatedDate FROM GameResult__c ORDER BY LastModifiedDate DESC LIMIT 10]);
    }
}
