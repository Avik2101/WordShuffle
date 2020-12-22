public with sharing class BoardController {
    @AuraEnabled
    public static string saveGameResult(string gameStatus, string gameMode) {
        try {
            GameResult__c gameResult = new GameResult__c(Name = gameStatus, GameMode__c = gameMode);
            insert gameResult;
            return 'success';
        } catch (Exception e) {
            return 'failure';
        }
    }
}
